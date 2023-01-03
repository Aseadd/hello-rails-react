module Api
  module V1
    class MessagesController < ApplicationController
      def index
        @meassage = Message.order(Arel.sql('RANDOM()')).first
        render json: @message
      end
    end
  end
end
