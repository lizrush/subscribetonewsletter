class VisitorsController < ApplicationController
  protect_from_forgery with: :exception
  before_action :update_pageviews_count, only: [:index]

  def index
    @total_visitors = count_visitors[:total]
    @returning_visitors = count_visitors[:returning]
    @new_visitors = count_visitors[:newvisitors]

    @chrome = count_browsers[:chrome]
    @safari = count_browsers[:safari]
    @firefox = count_browsers[:firefox]
    @other_browsers = count_browsers[:other]

    @mobile = count_mobile

    
  end

private

  def count_visitors
    count_visitors[:total] = Visitors.all.count
    count_visitors[:returning] = Visitors.where(:numberofvisits > 1).count
    count_visitors[:new] = Visitors.where(:numberofvisits < 2).count
  end

  def count_browsers
    count_browsers[:chrome] = Visitors.where(browser: "Chrome").count
    count_browsers[:safari] = Visitors.where(browser: "Safari").count
    count_browsers[:firefox] = Visitors.where(browser: "Firefox").count
    main_browsers = count_browsers[:chrome] + count_browsers[:safari] + count_browsers[:firefox]
    count_browsers[:other] = Visitors.all.count - main_browsers
  end

  def count_mobile
    Visitors.where(mobile: true).count
  end

end
