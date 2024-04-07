import os
from PIL import Image


def resize_png_images_in_directory(input_directory, output_directory):
    # Create the output directory if it doesn't exist
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # Loop through all files in the input directory
    for filename in os.listdir(input_directory):
        # Check if the file is a PNG image
        if filename.endswith(".png"):
            # Construct the input and output paths
            input_image_path = os.path.join(input_directory, filename)
            output_image_path = os.path.join(output_directory, filename)

            # Open the input PNG image
            with Image.open(input_image_path) as image:
                # Get the new size by halving the width and height
                new_size = (image.width // 2, image.height // 2)
                # Resize the image
                resized_image = image.resize(new_size)
                # Save the resized image
                resized_image.save(output_image_path)


# Example usage:
input_directory = 'product_images'
output_directory = 'product_images'
resize_png_images_in_directory(input_directory, output_directory)
