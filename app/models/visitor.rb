class Visitor < ActiveRecord::Base
 validates :ip_address,    presence: true


  
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
    sum(:ip_address)
  end



end
