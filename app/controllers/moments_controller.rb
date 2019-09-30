class MomentsController < ApplicationController
  before_action :set_moment, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:card]

  require 'digest'

  # GET /moments
  # GET /moments.json
  def index
    moments = Moment.all.where(user_id: current_user)
    @moments = moments.sort_by{|m| m.updated_at}.reverse
    render layout: "navbarHome"
  end

  # GET /moments/1
  # GET /moments/1.json
  
  def show
    redirect_to root_path
  end

  def card
    @moment = hashed_moment
    p '#######$$$$$$$%%%%%%%%$$$$$$######&&&&&&&&@@@@@@&&#&$&&@&'
    p @moment

    render layout: "card"
  end

  # GET /moments/new
  def new
    @moment = Moment.new
  end

  # GET /moments/1/edit
  def edit
    @moment = set_moment

  end

  # POST /moments
  # POST /moments.json
  def create
    p params
    if params[:occasion] == 'birthday'
      p '#######$$$$$$$%%%%%%%%$$$$$$######&&&&&&&&@@@@@@&&#&$&&@&'
      p params[:occasion]
      p '#######$$$$$$$%%%%%%%%$$$$$$######&&&&&&&&@@@@@@&&#&$&&@&'
    elsif params[:occasion] == 'graduation'
      p '#######$$$$$$$%%%%%%%%$$$$$$######&&&&&&&&@@@@@@&&#&$&&@&'
      p params[:occasion]
      p '#######$$$$$$$%%%%%%%%$$$$$$######&&&&&&&&@@@@@@&&#&$&&@&'
    elsif params[:occasion] == 'farewell'
      p '#######$$$$$$$%%%%%%%%$$$$$$######&&&&&&&&@@@@@@&&#&$&&@&'
      p params[:occasion]
      p '#######$$$$$$$%%%%%%%%$$$$$$######&&&&&&&&@@@@@@&&#&$&&@&'
    end

    @moment = Moment.new(title:"", to_name:"", from_name:"", occasion: params[:occasion], description3: params[:description])
    @moment.save

    respond_to do |format|
      if @moment.save

        moment_id = @moment.id.to_s
        p 'moment id'
        p moment_id
        Digest::SHA256.hexdigest 'moment_id'
        sha256 = Digest::SHA256.new
        hashed_id = sha256.hexdigest moment_id
        p 'hashed id'
        p hashed_id
        @moment.card_url = hashed_id
        @moment.save
        
        format.html { redirect_to edit_moment_path(@moment), notice: 'Moment was successfully created.' }
        format.json { render :show, status: :created, location: @moment }
      else
        format.html { render :new }
        format.json { render json: @moment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /moments/1
  # PATCH/PUT /moments/1.json
  def update
    # respond_to do |format|
      if @moment.update(moment_params)
        # format.html { redirect_to @moment, notice: 'Moment was successfully updated.' }
        # format.json { render :show, status: :ok, location: @moment }
        render :json => @moment, status: :ok
      else
        # format.html { render :edit }
        # format.json { render json: @moment.errors, status: :unprocessable_entity }
        render :json => @moment.errors, status: :unprocessable_entity
      end
    # end
  end

  # DELETE /moments/1
  # DELETE /moments/1.json
  def destroy
    @moment.destroy
    respond_to do |format|
      format.html { redirect_to moments_url, notice: 'Moment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_moment
      p'PARMARMMSMDMMSDMSMDMD'
      p params
      @moment = Moment.find(params[:id])

      
      # @moment = Moment.where(audio_url: params[:hash])[0]
      # p @moment

    end

    def hashed_moment
      # @moment = Moment.where(audio_url: params[:hash])[0]
      @moment = Moment.where(card_url: params[:hash])[0]

    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def moment_params
      # params.require(:moment).permit(:title, :to_name, :from_name, :description, :image_url, :audio_url)
      params.permit(:title, :to_name, :from_name, :description, :image_url, :audio_url, :occasion, :card_url, :description2, :description3)
    end
end
