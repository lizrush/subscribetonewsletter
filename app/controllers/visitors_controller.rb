class VisitorsController < ApplicationController
  protect_from_forgery with: :exception
  before_action :update_pageviews_count, only: [:index]

  def index
    @return_data = Visitor.return_count
    @browser_data = Visitor.find_by_browser
    @mobile_data = Visitor.count_mobile
    @lat_long_array = Visitor.coordinates
    gon.lat_long_array = @lat_long_array
  end

end
