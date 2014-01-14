class Visitor < ActiveRecord::Base
 


  def current_visitor
    @current_visitor ||= if session[:visitor_id]
      Visitor.find(session[:visitor_id])
    else
      visitor = Visitor.create(ip_address: request.remote_ip, mobile: mobile_device?)
      session[:visitor_id] = visitor.id
      visitor
    end
  end
  
  helper_method :current_visitor

  
  def self.return_visitors
    where('pageviews > 1')
  end


  def self.mobile_users
    where(mobile: true)
  end
 

  def self.non_mobile_users
    where(mobile: false)
  end

  def self.total_views
    sum(:pageviews)
  end
  
end
