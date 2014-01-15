class VisitorsController < ApplicationController
  protect_from_forgery with: :exception
  before_action :update_pageviews_count, only: [:index]

  def index
  end

end
