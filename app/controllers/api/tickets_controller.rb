class Api::TicketsController < ApplicationController
    def create
        @ticket = Ticket.new({meetup_id: attendee_params})
        # @ticket = Ticket.new(meetup_id: params[:id], user_id: current_user.id)

        # @ticket.user_id = current_user.id
        @user = current_user
        # msg = UserMailer.user_email(current_user)
        # msg.deliver_now
    
        if @ticket.save
            # render "/api/users/show"
            # @meetup = @ticket.meetup
            render "/api/meetups/show"
        else
            render @ticket.errors.full_messages
        end
    end

    # def join
    #     @ticket = Ticket.new(meetup_id: params[:id], user_id: current_user.id)
    #     if @ticket.save
    #         @meetup = @ticket.meetup
    #         render "/api/meetups/show"
    #     else
    #         render json: @ticket.errors.full_messages, status: 422
    #     end
    # end
    



      def leave
        @ticket = Ticket.find_by(meetup_id: params[:id], user_id: current_user.id)
        if @ticket
          Ticket.destroy(@ticket.id)
          @meetup = @ticket.meetup    # Why need this?
          render "api/meetups/show"
        else
          render json: @ticket.errors.full_messages, status: 422
        end
      end
    
        def destroy
            @ticket = Ticket.find(params[:id])
            # @ticket = Ticket.find_by(meetup_id: params[:id], user_id: current_user.id)

            if @ticket
                @ticket.destroy
                # @user = current_user
                # @events = current_user.events
                # @hosted_events = current_user.hosted_events

                # Ticket.destroy(@ticket.id)
                # @meetup = @ticket.meetup    # Why need this?
                # render "api/meetups/show"

                render 'api/users/index'
                # render "api/meetups/show"
            else
                render json: @ticket.errors.full_messages, status: 422
            end
            
        end
    
        private
        def ticket_params
            params.require(:meetupId)
        end
end
