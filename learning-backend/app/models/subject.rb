class Subject < ApplicationRecord
    
    has_many :questions
    belongs_to :age

end