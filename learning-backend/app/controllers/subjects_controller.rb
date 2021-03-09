class SubjectsController < ApplicationController

    def index
        subjects = Subject.all
        render json: subjects, except:[:created_at, :updated_at]
    end
    

end
