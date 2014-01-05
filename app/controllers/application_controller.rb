class ApplicationController < ActionController::Base
 require 'mailchimp'

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
	before_action :setup_mcapi
 
def setup_mcapi
  @mc = Mailchimp::API.new('e933ed759b8fb675d571e8ba26e0e95d-us3')
  @list_id = "24efbc6868"
end
 
end
