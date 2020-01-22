class PagesController < ApplicationController
   def home
        @content = 'Did you record your health info today?'
        @user = User.all
        @logged_in_user = User.find_by :id => session[:user_id]
        @top = User.order(id: :desc).limit(5)
    end

    def about
        @title = 'Welcome to Health Tracking!';
        @content = 'This wonderful app will help you to achieve your goal easier.';
        @section = 'Achieving and maintaining a healthy lifestyle can be a challenge for many people as the busy nature of many lives.';
        @section1 = 'By being able to enter and keep a record of your health and wellbeing over the past week, month or year, 
        you have set yourself becomes much easier as you are able to keep an eye on your progress and see how far you have come.';
        @section2 = 'Inputting your personal data, tracking your activity and your subsequent progress can encourage you and your colleagues
        or friends to be competitive with each other.';
        @section3 = 'Being able to see your progress can also help you to achieve smaller goals that are more focused on improving your general health,
        rather than completing a one-off ambition.';
        @section4 = 'By being able to see what your peers are doing, you are likely to be more encouraged to reach 
        and surpass your own exercise goals to keep on track with them, and to make sure you don’t look like the weak link in your office or friendship group.';
        @section5 ='Having the progress and achievements of your peers will increase your self-motivation as even those who aren’t particularly 
        competitive don’t want to be embarrassed or left looking the most unfit when compared to everyone else.';
        
    end

 
    def body_measurement_public
          @title = 'Record your lastest body info here.';
        if current_user
            redirect_to '/body_measurement'
      
        end
    end

    def bmi_calculator
        @title = 'Welcome to BMI Calculator!';
        @content = 'This is the BMI calculator app.';
        @bmi_explaination_title = 'What’s BMI?';
        @bmi_explaination = 'BMI compares your weight to your height, 
        and is calculated by dividing your weight (in kilograms) by your height (in metres squared). 
        It gives you an idea of whether you’re "underweight", a "healthy" weight, "overweight", or "obese" for your height. 
        BMI is one type of tool to help health professionals assess the risk for chronic disease.'
    end

    def warriors_gallery
        @title = "Welcome to Warriors' Gallery!";
        @content = 'Free feel to share your transformation here.';
      
    end
end
