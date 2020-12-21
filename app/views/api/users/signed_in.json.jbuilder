json.partial! "api/users/user", user: @user
json.message "Welcome back, #{@user.name}! It's nice to see you again!"