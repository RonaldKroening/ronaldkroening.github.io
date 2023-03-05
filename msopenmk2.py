import numpy as np

import matplotlib.pyplot as plt
import mpl_toolkits.mplot3d.axes3d as p3
from PIL import Image
import io

# Generate a set of points for the Mobius strip
gif_size = 100
u = np.linspace(0, 2 * np.pi,gif_size)
v = np.linspace(-1, 1, gif_size)
U, V = np.meshgrid(u, v)

x = (1 + 0.5*V*np.cos(U/2)) * np.cos(U)
y = (1 + 0.5*V*np.cos(U/2)) * np.sin(U)
z = 0.5*V*np.sin(U/2)

x = x.flatten()
y = y.flatten()
z = z.flatten()

numSteps = len(x)

lineSize = 20

images = []
def generate_window(idx, size):
    idxEnd = idx+size
    if(idxEnd > numSteps):
        idxEnd -= numSteps
    x1= x[idx:idxEnd]
    y1 = y[idx:idxEnd]
    z1 = z[idx:idxEnd]
    return [x1,y1,z1]
    

for i in range(numSteps):
    X,Y,Z = generate_window(i,lineSize)
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')

    # Plot the scatter points
    ax.scatter(X, Y, Z, c='r', marker='o')

    # Remove the axis labels
    ax.set_axis_off()

    # Convert the plot to an image
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    img = Image.open(buf)
    images.append(img)

    ax.clear()

# Create a GIF animation from the images
images[0].save('mobius_strip.gif', save_all=True, append_images=images[1:], duration=100, loop=0)