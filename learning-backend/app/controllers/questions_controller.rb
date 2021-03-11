class QuestionsController < ApplicationController

    def index
        questions = Question.all
        render json: questions, except:[:created_at, :updated_at]
    end
    
    def update
        question = Question.find(params[:id])
        question.subject_id = Subject.first.id
        question.question = params[:question]
        question.answer = params[:answer]
        question.image = params[:image]
        question.save
        render json: question
    end

    def destroy
      question = Question.find(params[:id])
      question.destroy
    end

    def create 
        # byebug
        question = Question.new
        question.subject_id = Subject.first.id
        question.question = params[:question]
        question.answer = params[:answer]
        question.image = params[:image]
        question.save
        render json: question
        
    end


    # def question_params
    #     params.require(:question).permit(:question, :answer, :image, :sound)
    # end

end
