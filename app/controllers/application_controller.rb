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
    @current_visitor ||= if session[:visitor_id]
      Visitor.find(session[:visitor_id])
      current_visitor.update(numberofvisits: current_visitor.numberofvisits + 1)
    else 
      visitor = Visitor.create(find_visitor_info)
      session[:visitor_id] = visitor.id
      visitor
    end
  end
  
  helper_method :current_visitor

  # def set_parser
  #   parser = AgentOrange::UserAgent.new(request.user_agent)
  # end
  # helper_ method :set_parser

  def find_visitor_info
  	parser = AgentOrange::UserAgent.new(request.user_agent)
  	result = {}

  	result[:browser] = parser.device.engine.browser.to_s
  	result[:device] = parser.device.operating_system.to_s
  	result[:mobile] = parser.is_mobile?
  	result[:browserversion] = parser.device.engine.browser.version.to_s
  	result[:ip_address] = request.remote_ip.to_s
  	result[:referrer] = request.referrer.to_s

  	result
  end

end
