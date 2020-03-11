class Api::BookingsController < ApplicationController
  # before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @bookings = current_user.bookings.includes(:spot).all
    render :index
  end

  def show
    @booking = current_user.bookings.includes(:spot).find(params[:id])
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.status = "Pending"
    if @booking.save
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def update
    @booking = current_user.bookings.find(params[:id])
    if @booking.update(booking_params)
      render 'api/bookings/show'
    else
      render json: ["You must be logged in to update a booking."]
    end 
  end

  def destroy
    @booking = current_user.bookings.find(params[:id])
    @booking.destroy
    render 'api/bookings/show'
  end

  private
  def booking_params
    params.require(:booking).permit(:arrival_date, :departure_date, :num_travelers, :hopper_id, :spot_id, :status)
  end

end
