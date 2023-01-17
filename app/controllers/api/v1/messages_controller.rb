module Api
  module V1
    class MessagesController < ApplicationController
      def index
        @meassage = Message.order(Arel.sql('RANDOM()')).first
        render json: @message
      end

        def create
            @messag = Message.new(name: 'Test')
            if @message.save
                render json: @message
            else
                render json: @message.errors, status: :unprocessable_entity
            end
        end

    end
  end
end
