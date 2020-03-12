class Api::SearchController < ApplicationController

  def search
    site_name = params[:site_name].split(" ")
    @spots = []

    site_name.each do |part|
      spot = Spot.find_by(site: part)
      
    end
  end

end
