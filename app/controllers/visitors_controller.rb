class VisitorsController < ApplicationController
  protect_from_forgery with: :exception
  before_action :update_pageviews_count, only: [:index]
  helper_method :count_visitors, :count_browsers, :count_mobile

  def index
    puts "index before variables"
    @total_visitors = count_visitors[:total]
    @returning_visitors = count_visitors[:returning]
    @new_visitors = count_visitors[:newvisitors].to_i

    @chrome = count_browsers[:chrome]
    @safari = count_browsers[:safari]
    @firefox = count_browsers[:firefox]
    @ie = count_browsers[:ie]
    @other_browsers = count_browsers[:other]

    @mobile = count_mobile[:mobile].to_i
    @nonmobile = count_mobile[:nonmobile].to_i

    @lat_long_array = coordinates
    gon.lat_long_array = @lat_long_array
  end

  private 
 # refactor this later into model using sql to group and count
  def count_visitors
    count_visitors = {}
    count_visitors[:total] = Visitor.all.count
    count_visitors[:returning] = Visitor.where('numberofvisits'.to_i > 1).count
    count_visitors[:new] = Visitor.where('numberofvisits'.to_i == 1).count
    count_visitors
  end

  def count_browsers
    count_browsers = {}
    count_browsers[:chrome] = Visitor.where(browser: "Chrome").count
    count_browsers[:safari] = Visitor.where(browser: "Safari").count
    count_browsers[:firefox] = Visitor.where(browser: "Firefox").count
    count_browsers[:ie] = Visitor.where(browser: "MSIE").count
    main_browsers = count_browsers[:chrome] + count_browsers[:safari] + count_browsers[:firefox] + count_browsers[:ie]
    count_browsers[:other] = Visitor.all.count - main_browsers
    count_browsers
  end

  def count_mobile
    count_mobile = {}
    count_mobile[:mobile] = Visitor.where(mobile: true).count
    count_mobile[:nonmobile] = Visitor.where(mobile: false).count
    count_mobile
  end

  def coordinates
    latitude = Visitor.pluck(:latitude)
    longitude = Visitor.pluck(:longitude)
    coordinates = latitude.zip(longitude)
    coordinates.delete_if {|array| array.include?("0.0")}
    coordinates
  end

end
