class MomentsController < ApplicationController
  before_action :set_moment, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  require 'digest'
  # GET /moments
  # GET /moments.json
  def index
    @moments = Moment.all
  end

  # GET /moments/1
  # GET /moments/1.json
  def show
    moment = set_moment
    # sha2 = Digest::SHA2.new
    # p sha2  
    # sha2.update "a"
    # p sha2
    # sha2.update "ab"
    # p sha2
    # sha2.update "a"
    # p sha2

    p 'test shaaaaaaaaaa@@@@@@@@@@'

    Digest::SHA256.digest 'abc' 
    sha256 = Digest::SHA256.new
    p sha256

    sha256.digest 'x'
    p sha256


  end

  # @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  # @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  # AJAX the links in edit page, so that I don't need to generate a new page
  # a href [moments] <%=moment.hash/> (when i create the file)
  #hassssshhhhh itttt first and store it in the database


  # def show
  #   #Moment.find (dont do this)
  #   moment = Moment.where(hash:params[:hash])
  # end

  # @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  # @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  def generate
    
  end

  # GET /moments/new
  def new
    @moment = Moment.new
  end

  # GET /moments/1/edit
  def edit
    @moment = set_moment
    render layout: "sidebar"

  end

  # POST /moments
  # POST /moments.json
  def create
    @moment = Moment.new(title:"", to_name:"", from_name:"")
    respond_to do |format|
      if @moment.save
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
      @moment = Moment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def moment_params
      # params.require(:moment).permit(:title, :to_name, :from_name, :description, :image_url, :audio_url)
      params.permit(:title, :to_name, :from_name, :description, :image_url, :audio_url)
    end
end
