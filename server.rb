require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'sinatra/json'
require 'json'

require_relative 'models/user'
require_relative 'models/post'

enable :sessions

before do 
  find_user
end

post '/auth' do
  body = JSON.parse(request.body.read).symbolize_keys
  attrs = { name: body[:name], email: body[:email], photo: body[:photo] }
  
  @user = User.find_or_create_by(attrs)
  session[:user_id] = @user.id

  json @user
end

get '/posts' do
  posts = Post.limit(20).order('created_at DESC')
  json posts, include: :user
end

get "/*" do
  erb :'index.html'
end

def find_user
  id = session[:user_id]
  if id
    @user = User.find(id)
  else 
    @user = nil
  end
end

