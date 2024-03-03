import os

sub_folders = [
    "Docs",
    "Flows_Form_Comp",
    "Flows_From_FX",
    "Flows_To_Comp",
    "General_Issues",
    "Movs_From_Comp",
    "Movs_From_FX",
    "Movs_From_Lighting",
    "SingleFrames_From_Comp",
    "SingleFrames_From_Lighting",
]

post_folder_name = "07_Post"

# use your current machine location should be replaced
primary_path = '/Users/mohaa/Desktop/technicolor/'

# user input via terminal
parent_folder_name = input('Enter your parent folder name: ')

def create_folders():
    custom_parent_folder = f"{primary_path}{parent_folder_name}"
    
    if not os.path.exists(custom_parent_folder):
        os.mkdir(custom_parent_folder)

    for folder_name in sub_folders:
        sub_folders_location = f"{custom_parent_folder}/{post_folder_name}/{folder_name}"
        print(sub_folders_location)

        if not os.path.exists(sub_folders_location):
            os.makedirs(sub_folders_location)
        
    print('folders created successfully!')

create_folders()