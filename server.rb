require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'sinatra/json'
require 'json'

get "/" do
  send_file File.expand_path('index.html', settings.public_folder)
end
