class Visitor < ActiveRecord::Base
    geocoded_by :ip_address
    after_validation :geocode
    validates :ip_address,    presence: true


  def self.find_by_browser
    browser_data = {}
    browser_data[:chrome] = Visitor.where(browser: "Chrome").count
    browser_data[:safari] = Visitor.where(browser: "Safari").count
    browser_data[:firefox] = Visitor.where(browser: "Firefox").count
    browser_data[:ie] = Visitor.where(browser: "MSIE").count
    main_browsers = browser_data[:chrome] + browser_data[:safari]+ browser_data[:firefox] + browser_data[:ie]
    browser_data[:other] = Visitor.count - main_browsers
    browser_data
  end

  def self.count_mobile
    count_mobile = {}
    count_mobile[:mobile] = Visitor.where(mobile: true).count
    count_mobile[:nonmobile] = Visitor.where(mobile: false).count
    count_mobile
  end


  def self.return_count
    count_visitors = {}
    count_visitors[:total] = Visitor.count
    count_visitors[:returning] = Visitor.where('numberofvisits'.to_i > 1).count
    count_visitors[:new] = count_visitors[:total] - count_visitors[:returning]
    count_visitors
  end

  def self.coordinates
    latitude = Visitor.pluck(:latitude)
    longitude = Visitor.pluck(:longitude)
    coordinates = latitude.zip(longitude)
    coordinates.delete_if {|array| array.include?("0.0")}
    coordinates
  end

end
