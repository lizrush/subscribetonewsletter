Mailchimp::Application.routes.draw do
  
  resources :visitors

  root 'mcsubscribe#index'
  post 'mcsubscribe/subscribe' => 'mcsubscribe#subscribe'
end
