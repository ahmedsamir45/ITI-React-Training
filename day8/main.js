    
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'rockbands.json', true);
        xhr.responseType = 'json';

        xhr.onload = function() {
            if (xhr.status === 200) {
                var data = xhr.response;

            
                var bandDropdown = document.getElementById('band');
                for (var band in data) {
                    var option = document.createElement('option');
                    option.value = band;
                    option.textContent = capitalizeFirstLetter(band);
                    bandDropdown.appendChild(option);
                }

            
                bandDropdown.addEventListener('change', function() {
                    var selectedBand = this.value;
                    var artistDropdown = document.getElementById('artist');
                    artistDropdown.innerHTML = '<option value="">Please select</option>'; // Clear previous options
                
                    if (selectedBand) {
                        var artists = data[selectedBand];
                
                        // Use a traditional for loop to populate the artist dropdown
                        for (var i = 0; i < artists.length; i++) {
                            var artist = artists[i];
                            var option = document.createElement('option');
                            option.value = artist.value;
                            option.textContent = artist.name;
                            artistDropdown.appendChild(option);
                        }
                    }
                });
                var artistDropdown = document.getElementById('artist');
                artistDropdown.addEventListener('change', function() {
                    var artistLink = this.value;
                    if (artistLink) {
                        window.open(artistLink, '_blank');
                    }
                });
            } else {
                alert('Failed to load JSON data');
            }
        };

        xhr.onerror = function() {
            alert('Request failed');
        };

        xhr.send();
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }