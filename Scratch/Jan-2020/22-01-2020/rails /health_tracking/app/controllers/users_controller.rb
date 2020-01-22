class UsersController < ApplicationController
  def new
        @user = User.new
    end

    def index 
        @users = User.all
    end

    def show
        @user = User.find(params[:id])
    end

    

    def update
         @user = User.find(params[:id])
        form_params = params.require(:user).permit(:name, :email, :city)
        puts "===================================="
        puts "USER ID: " + @user.id.to_s
        puts form_params.inspect
        puts "==================================="
        @user.name = form_params[:name]
        @user.email = form_params[:email]
        @user.city = form_params[:city]
        # @user.update(form_params)
        @user.save
        # if @user.update(form_params)
        redirect_to mysetting_path, notice: "Thank you for updating!"  
        # else
         #   flash[:errors] = @user.errors.full_messages
        #    render :edit
        # end
    end

    def edit
       @user = User.find_by :id => session[:user_id]
    end
    

    def create
        form_params = get_create_user_form_params()

        @user = User.new(form_params)
        if @user.save
            session[:user_id] = @user.id
            redirect_to about_url, notice: "Thank you for signing up!"
            
        else
            render "new"
        end
    end

    private
   
    def get_create_user_form_params
        params.require(:user).permit(:name, :email, :gender, :city, :password, :password_confirmation)
    end

  
end
