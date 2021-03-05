class AgesController < ApplicationController

    def index
        ages = Age.all
        render json: ages, except:[:created_at, :updated_at]
    end

end
