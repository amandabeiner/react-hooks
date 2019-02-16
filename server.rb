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
  posts_json = posts.as_json(include: { user: { only: [:name, :photo] } })
  json posts_json
end

post '/posts' do
  data = JSON.parse(request.body.read).symbolize_keys
  attrs = { title: data[:title], link: data[:link], description: data[:description], user: @user}
  post = Post.new(attrs)

  if post.save
    json post
  else
    json post.errors.full_messages
  end
end

get "/*" do
  erb :'index.html'
end

private 

def find_user
  id = session[:user_id]
  if id
    @user = User.find(id)
  else 
    @user = nil
  end
end

