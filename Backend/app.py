from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
from flask_cors import CORS
from extract_data import process_image  # Import the function from extract_data.py

app = Flask(__name__)
CORS(app)

# Configure upload folder and allowed file extensions
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Function to check if the file is allowed
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Route to handle file upload and data extraction
@app.route('/extract', methods=['POST'])
def extract_data():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'}), 400

        file = request.files['file']

        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        # Check the MIME type to confirm it's an image
        if 'image' not in file.content_type:
            return jsonify({'error': 'Uploaded file is not an image'}), 400

        if file and allowed_file(file.filename):
            # Save the file securely
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)

            # Process the image to extract data
            result = process_image(file)  # Pass the file object to process_image

            if 'error' in result:
                return jsonify(result), 500  # Return the error if processing fails

            return jsonify(result)  # Return the extracted data as JSON
        else:
            return jsonify({'error': 'Invalid file format'}), 400

    except Exception as e:
        # Log the error
        print("Error processing file:", e)
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True)
