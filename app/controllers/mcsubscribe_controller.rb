# McsubscribeController handles the subscription action for Mailchimp
class McsubscribeController < ApplicationController
  protect_from_forgery with: :exception
  
  def index
  end

  def subscribe
    email = params[:email][:address]
    if !email.blank?

      begin
        @mc.lists.subscribe(@list_id, 'email' => email)
        respond_to do |format|
          format.json { render :json => { :message => 'Success! Check your email to confirm.' } }
        end
        rescue Mailchimp::ListAlreadySubscribedError
          respond_to do |format|
            format.json { render :json => { :message => "Looks like #{email} is already subscribed to the list" } }
          end
        rescue Mailchimp::ListDoesNotExistError
          respond_to do |format|
            format.json { render :json => { :message => 'Whoops, the list could not be found.' } }
          end
        rescue Mailchimp::Error => ex
            if ex.message
              respond_to do |format|
                format.json { render :json => { :message => 'Please enter a valid email address.' } }
              end
            else
              respond_to do |format|
                format.json { render :json => { :message => 'An unknown error occurred. Try again later.' } }
              end
            end
        end
        else
          respond_to do |format|
            format.json { render :json => { :message => "Looks like you didn't actually input anything... please try again!" } }
          end
    end
  end
end
