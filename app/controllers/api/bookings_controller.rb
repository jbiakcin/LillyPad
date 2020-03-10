class Api::BookingsController < ApplicationController
  # before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @bookings = Booking.all
    render :index
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render `api/spots`
      # render `api/bookings/show`
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update
    @booking = Booking.find(params[:id])
    if current_user.id == @booking.hopper_id
      @booking.update(booking_params)
      render `api/bookings/show`
    else
      render json: ["You must be logged in to update a booking."]
    end 
  end

  def destroy
    @booking = Booking.find(params[:id])
    if current_user.id == @booking.hopper_id
      @booking.destroy
      render `api/bookings/show`
    else
      render json: @booking.errors.full_messages, status: 401
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:arrival_date, :departure_date, :num_travelers, :hopper_id, :spot_id, :status)
  end

end
