class LoginController < ApplicationController
  def index
    @themes = Theme.all
    if !user_signed_in?
      render layout: "navbarLogin"
    else 
      render layout: "navbarHome"
    end

    
  end
end
