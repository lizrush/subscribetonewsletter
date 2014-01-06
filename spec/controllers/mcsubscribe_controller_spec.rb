require "spec_helper"

describe McsubscribeController do
  
  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response.status).to eq(200)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end
  end


# # below is my stab at testing json resposes in the controller. does not work tho.
# not sure how else to test my controller since it's basically all json stuff...?
  context "JSON" do
    render_views

    describe "json" do
      it "should render json successfully" do
        get :subscribe
        JSON.parse(response).should == 'Success! Check your email to confirm.'
      end
    end  
  end
end
