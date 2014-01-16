class ApplicationController < ActionController::Base
  require 'mailchimp'

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :setup_mcapi

  def setup_mcapi
    @mc = Mailchimp::API.new('e933ed759b8fb675d571e8ba26e0e95d-us3')
    @list_id = '24efbc6868'
  end


  def current_visitor
    unless @current_visitor
      if cookies.permanent[:visitor_id]
        @current_visitor = Visitor.find(cookies.permanent[:visitor_id])
      else 
        @current_visitor = Visitor.create(find_visitor_info)
        
        cookies.permanent[:visitor_id] = @current_visitor.id
        cookies.permanent[:last_visit] = Time.now
      end

      Rails.logger.warn cookies.permanent[:last_visit].inspect
      if Time.now.to_i - cookies.permanent[:last_visit].to_i > 1.hour
        @current_visitor.update(numberofvisits: @current_visitor.numberofvisits + 1)
      end

      cookies.permanent[:last_visit] = Time.now.to_i
    end

    @current_visitor
  end
  helper_method :current_visitor


  def find_visitor_info
    parser = AgentOrange::UserAgent.new(request.user_agent)
    result = {}

    result[:browser] = parser.device.engine.browser.name.to_s
    result[:device] = parser.device.operating_system.to_s
    result[:mobile] = parser.is_mobile?
    result[:browserversion] = parser.device.engine.browser.version.to_s
    result[:ip_address] = request.remote_ip.to_s
    result[:referrer] = request.referrer.to_s
    result[:numberofvisits] = 1

    result
  end

  def update_pageviews_count
    current_visitor.update(pageviews: current_visitor.pageviews + 1)
  end

end
