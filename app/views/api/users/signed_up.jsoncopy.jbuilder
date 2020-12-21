json.partial! "api/users/user", user: @user
json.message "Welcome to Kapiteh Times, #{@user.name}! Your account has been successfully created!"