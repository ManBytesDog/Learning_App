class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.integer :subject_id
      t.string :question
      t.string :answer
      t.string :image

      t.timestamps
    end
  end
end
