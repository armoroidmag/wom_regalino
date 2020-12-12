class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end

  Refile.secret_key = '26f43890ba868bd87ebf410d473689dde266f13630c1ad11cb6b30f0a5f8b8f584eb9cdb0dc1b66141c90e3d5819da370666d98aa5fbd8e9f082ed0516142de8'
end
