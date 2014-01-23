class Visitor < ActiveRecord::Base
	geocoded_by :ip_address
	after_validation :geocode
	validates :ip_address,    presence: true

end
