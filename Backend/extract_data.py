import pytesseract
from PIL import Image
import re
from io import BytesIO

# Set up pytesseract path (adjust to your installation path)
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"  # For Windows
# For macOS or Linux, you may not need to set this path if tesseract is already in PATH

# Function to extract text from an image file (from request.files)
def extract_text_from_image(file):
    try:
        # Ensure the file is a valid image by reading it directly into memory
        img = Image.open(BytesIO(file.read()))  # Read the image directly from the file object
        img.verify()  # Verify that it's an image (raises an exception if not)
        text = pytesseract.image_to_string(img)  # Extract text using Tesseract
        return text
    except Exception as e:
        print("Error processing image:", e)
        return None

# Function to extract Aadhaar number and Name
def extract_aadhaar_and_name(text):
    # Regex for Aadhaar number (12 digits)
    aadhaar_regex = r"\b\d{4} \d{4} \d{4}\b|\b\d{12}\b"

    # Regex for name (common patterns - you can customize based on how the names appear)
    name_regex = r"Name\s*[:\-]?\s*([A-Za-z\s]+)"

    aadhaar_numbers = re.findall(aadhaar_regex, text)
    names = re.findall(name_regex, text)

    # Return extracted data
    return names, aadhaar_numbers

# Function to process the uploaded image (from request.files)
def process_image(file):
    text = extract_text_from_image(file)  # Extract text from image
    if text is None:
        return {'error': 'Failed to process image or not a valid image.'}

    names, aadhaar_numbers = extract_aadhaar_and_name(text)  # Extract name and Aadhaar number

    if names and aadhaar_numbers:
        return {'name': names[0], 'aadhaar_number': aadhaar_numbers[0]}
    else:
        return {'error': 'Could not extract name or Aadhaar number.'}
