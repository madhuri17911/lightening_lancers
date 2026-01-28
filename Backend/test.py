import pytesseract
from PIL import Image
import re

# Set up pytesseract path (adjust to your installation path)
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"  # For Windows
# For macOS or Linux, you may not need to set this path if tesseract is already in PATH

# Function to extract text from image
def extract_text_from_image(image_path):
    img = Image.open(image_path)
    text = pytesseract.image_to_string(img)
    return text

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

# Main function
def main(image_path):
    # Step 1: Extract text from image
    text = extract_text_from_image(image_path)

    # Step 2: Extract name and Aadhaar number using regex
    names, aadhaar_numbers = extract_aadhaar_and_name(text)

    # Step 3: Display results
    if names and aadhaar_numbers:
        print(f"Name: {names[0]}")
        print(f"Aadhaar Number: {aadhaar_numbers[0]}")
    else:
        print("Could not extract name or Aadhaar number.")

# Test the function
image_path = "C:\\Users\\MJadhav\\Downloads\\image1.png"  # Path to your Aadhaar card image
main(image_path)
