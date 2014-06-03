class WelcomeController < ApplicationController
  def search
    values = %w[amanda alex alexis armando bob brian bliss courtney zunger]
    results = values.select{ |w| w.include?(params[:input]) }
    render json: results
  end
end