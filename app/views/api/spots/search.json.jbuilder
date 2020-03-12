json.spots do
  @results.each do |result|
    json.set! result.id do
      json.partial! 'spot', spot: result
      json.photoUrls result.photos.map {|file| url_for(file)}
    end
  end
end