#!/usr/bin/env node

/*This file is the input file of the cqx module. it must not be modified*/

// Import Library

import { Command } from "commander";

// Import Commands

import init from "./init.js";

// Import Commands

import {
    logError,
} from "../libs/utils.js";

const program = new Command();

// Define commands

program
    .argument("<folder>", "Folder where you want to initialize project")
    .description("Initiating a cqx project")
    .option("-d, --description <description>", "Description of the project")
    .option("--ci", "Add .circleci/config.yml file")
    .option(
        "--setup",
        "Generate setup.sh file to setup project on github and circleci"
    )
    .option("--gregion <gregion>", "Google compute regio,", "europe-north1")
    .option("--gproject <gproject>", "Google project ID", "cqx")
    .option(
        "-m, --modules-path <modules_path>",
        "Copy an existing node_modules and yarn.lock in the project"
    )
    .action((folder, options) => {
        console.time("time");
        init(
                folder,
                options.description,
                options.ci,
                options.setup,
                options.gregion,
                options.gproject,
                options.modulesPath
            )
            .then(() => {
                console.timeEnd("time");
            })
            .catch((err) => {
                logError(err);
                process.exit(1);
            })
            .finally(() => {
                setTimeout(() => {
                    process.exit(0);
                }, 500);
            });
    });

program.parse(process.args);