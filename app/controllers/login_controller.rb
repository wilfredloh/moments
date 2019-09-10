class LoginController < ApplicationController
  def index
    @themes = Theme.all
    @moments = Moment.all.last(4).sort_by{|m| m.updated_at}.reverse

    if !user_signed_in?
      render layout: "navbarLogin"
    else 
      render layout: "navbarHome"
    end

    
  end
end
