class ProfileController < ApplicationController
    

  def me
    @logged_in_user = User.find_by :id => session[:user_id]
    # @logged_in_user = @current_user.id
    @bodies = Body.all
    # @line_graph_data = Body.where(:user_id => current_user.id).group(:id).sum(:weight)
    # @line_graph_data1 = Body.where(:user_id => current_user.id).group_by_day(:date, format: "%e").average(:weight)
    #  puts "===================================="
    #     puts @line_graph_data1.inspect
    #     puts "==================================="
    @result = {}
    Body.where(:user_id => current_user.id).each do |body|
      @result[body.date.day] = body.weight
    end
         puts "===================================="
        puts @result.inspect
        puts "==================================="
    
  end

  def my_table
    @bodies = Body.where(:user_id => session[:user_id]) 
        puts "===================================="
        puts @bodies.inspect
        puts "==================================="
    @logged_in_user = User.find_by :id => session[:user_id]
    @title = 'see how far you have come.';
   
    # @tr = Body.find(params[:id])
    #  puts "===================================="
    #     puts @tr.inspect
    #     puts "==================================="
    # @bmi = @tr.weight/(@tr.height^2)
  end



  def setting
    @logged_in_user = User.find_by :id => session[:user_id]
    # @line_graph_data = Body.where(:user_id => current_user.id).group(:id).sum(:weight)
    # @bmi = @logged_in_user.initial_weight/@logged_in_user.height/@logged_in_user.height
  end

  def edit
    @logged_in_user = User.find_by :id => session[:user_id]
  end

   def create
        form_params = get_create_user_form_params()
        @user = User.find_by :id => session[:user_id] 
        @user.save
            redirect_to mytable_url, notice: "Thank you for signing up!"
    end
    private
    def get_create_user_form_params
        params.require(:update_body_info).permit(:weight)
    end


end
