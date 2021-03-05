# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Age.destroy_all
Subject.destroy_all
Question.destroy_all


Age.create(ages: "2-3" )
Age.create(ages: "3-4" )
Age.create(ages: "4-5" )

Subject.create(age_id: Age.first.id, subject_name: "colors")
Subject.create(age_id: Age.first.id, subject_name: "numbers")
Subject.create(age_id: Age.second.id, subject_name: "numbers")

Question.create(subject_id: Subject.first.id, question: "What is this color?", image: "https://i2.wp.com/theteachingaunt.com/wp-content/uploads/2020/01/Colors-Flashcards-Free-Printables-RED.jpeg?resize=594%2C774&ssl=1", answer: "Red")
Question.create(subject_id: Subject.second.id, question: "2 + 2", image: "", answer: "4")
