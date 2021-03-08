class AddSoundToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :sound, :string
  end
end
