class ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = current_user.reviews.find(params[:id])
    if @review.update(review_params)
      render 'api/reviews/show'
    else
      render json: ["You must be logged in to update a review."]
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    @review.destroy
    render 'api/reviews/show'
  end

  private
  def review_params
    params.require(:review).permit(:content, :spot_id, :reviewer_id)
  end

end
