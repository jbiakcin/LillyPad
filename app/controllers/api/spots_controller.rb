class Api::SpotsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @spots = Spot.all
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render "api/spots/show"
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def update
    if logged_in?
      @spot = Spot.find(params[:id])
      @spot.update(spot_params)
      render "api/spots/show"
    else
      render json: ["You must be logged in to update a spot."]
    end
  end

  def destroy
    @spot = Spot.find(params[:id])
    if current_user.id == @spot.host_id
      @spot.destroy
      render "api/spots/show"
    else
      render json: @spot.errors.full_messages, status: 401
  end

  private
  def spot_params
    params.require(:spot).permit(:host_id, :host_name, :site, :location_name, :max_guests)
  end
end
