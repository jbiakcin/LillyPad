class Api::SpotsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]
  
  def index
    @spots = Spot.includes(:host, :bookings, photos_attachments: :blob).all
    render :index
  end

  def show
    @spot = Spot.includes(:host).with_attached_photos.find(params[:id])
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
  end

  def search
    search_arr = params[:site].split(" ")
    @results = []

    search_arr.each do |part|
      @results = Spot.all.where("site LIKE '%#{part}%'")
    end
    
    render :search

  end

  private
  def spot_params
    params.require(:spot).permit(:host_id, :site, :location_name, :max_guests, photos: [])
  end
end
