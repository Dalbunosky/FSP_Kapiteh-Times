# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_13_003946) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "meetups", force: :cascade do |t|
    t.string "location", default: [], null: false, array: true
    t.integer "host", null: false
    t.string "guests", default: [], array: true
    t.integer "capacity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "topic", null: false
    t.integer "time", default: [], null: false, array: true
    t.index ["host"], name: "index_meetups_on_host", unique: true
  end

  create_table "tickets", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "meetup_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "meetup_id"], name: "index_tickets_on_user_id_and_meetup_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "home_city", null: false
    t.boolean "email_subscription", default: true, null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.boolean "host_status", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.integer "phone"
    t.string "story"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
